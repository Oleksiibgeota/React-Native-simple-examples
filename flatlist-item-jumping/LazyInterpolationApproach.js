import {useEffect, useRef, useState} from "react";
import {FlatList, ImageBackground, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

export const LazyInterpolationApproach = ({debug}) => {
    const [photos, setPhotos] = useState([])
    const flatListRef = useRef(null)


    const [itemIndexMap, setItemIndexMap] = useState([])
    const [itemIndexMapSorted, setItemIndexMapSorted] = useState([])

    const [isTouching, setIsTouching] = useState(false);
    const [isScrollReduce, setIsScrollReduce] = useState(false);
    const scrollPositionPrev = useRef(0)

    const [startTouching, setStartTouching] = useState({time: 0, y: 0});
    const [endTouching, setEndTouching] = useState({time: 0, y: 0});
    const panResponseTime = 200;

    useEffect(() => {
        if (!isTouching) {
            if (endTouching.time - startTouching.time < panResponseTime) {
                let dif = (endTouching.y - startTouching.y)
                if (Math.abs(dif) > 5) {
                    if (isScrollReduce) {
                        let direction = dif < 0 ? 'asc' : 'desc';
                        const closestIndex = findIndexByReducedHeight(
                            itemIndexMapSorted,
                            scrollPositionPrev.current,
                            direction,
                            debug
                        );
                        flatListRef.current.scrollToIndex({animated: true, index: closestIndex});
                    }
                }
            }
        }
    }, [isTouching, endTouching, isScrollReduce])

    useEffect(() => {
        setItemIndexMapSorted(sortAndReduceData(itemIndexMap))
    }, [itemIndexMap])


    useEffect(() => {
        fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20')
            .then(response => response.json())
            .then(json => {
                setPhotos(json.photos.map(each => each.url))
            })
    }, [])

    return (

        <View style={{flex: 1}}>
            <StatusBar hidden={false}/>
            <FlatList data={photos}
                      ref={flatListRef}
                      renderItem={({item, index}) => {
                          return (<View style={{marginTop: 10}}
                                        onLayout={(event) => {
                                            let {x, y, width, height} = event.nativeEvent.layout;
                                            console.log('x, y, width, height', x, y, width, height)
                                            setItemIndexMap((old) => [...old, {index, height: (height + y)}])
                                        }}>
                                  <ImageBackground
                                      style={{
                                          width: '100%',
                                          aspectRatio: 1.5,
                                          borderRadius: 15,
                                          justifyContent: 'flex-end',
                                          backgroundColor: 'green',
                                          overflow: 'hidden',
                                      }}
                                      source={{uri: item}}
                                  >
                                      {debug && <View style={{
                                          paddingHorizontal: 6,
                                          alignSelf: 'flex-end',
                                          borderWidth: 2,
                                          backgroundColor: 'white'
                                      }}>
                                          <Text style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                              {`${itemIndexMapSorted[index]?.reducedHeight}`}
                                          </Text>
                                      </View>}

                                  </ImageBackground>
                              </View>
                          )
                      }
                      }
                      showsVerticalScrollIndicator={false}


                      onScroll={(event) => {
                          let posDiff = event.nativeEvent.contentOffset.y - scrollPositionPrev.current;
                          scrollPositionPrev.current = event.nativeEvent.contentOffset.y;
                          if (Math.abs(posDiff) < 15) {
                              setIsScrollReduce(true)
                          }
                      }}
                      onScrollEndDrag={(event) => {
                          setIsTouching(false);
                          setIsScrollReduce(false);
                          setEndTouching({time: Date.now(), y: event.nativeEvent.contentOffset.y})
                      }
                      }
                      onScrollBeginDrag={(event) => {
                          setIsTouching(true);
                          setIsScrollReduce(false)
                          setStartTouching({time: Date.now(), y: event.nativeEvent.contentOffset.y})
                      }
                      }
            />
            {debug && <View style={{backgroundColor: 'white', position: 'absolute', left: 20, top: 300}}>
                    <Text>
                        {scrollPositionPrev.current}
                    </Text>
                </View>
            }

        </View>

    );
}

const findIndexByReducedHeight = (sortedData_, target, dir, debug) => {
    const logs = (i) => {
        console.debug('sortedData_[i].reducedHeight', sortedData_[i].reducedHeight)
        console.debug('target ', dir === 'asc' ? 'asc' : 'desc', target)
    }

    for (let i = 0; i < sortedData_.length; i++) {
        if (debug) {
            logs(i)
        }
        if (dir === 'asc') {
            if (sortedData_[i].reducedHeight > target) {
                return i;
            }
        } else if (dir === 'desc') {
            if (sortedData_[i].reducedHeight > target) {
                if ((i + 1) > sortedData_.length) {
                    return sortedData_.length
                } else {
                    return i + 1;
                }
            }
        }
    }
};


const sortAndReduceData = (itemIndexMap,) => {
    itemIndexMap.sort((a, b) => a.index - b.index);

    return itemIndexMap.map((item, index) => ({
        index: item.index,
        reducedHeight: itemIndexMap
            .slice(0, index + 1)
            .reduce((acc, curr) => acc + curr.height, 0),
    }));
}
