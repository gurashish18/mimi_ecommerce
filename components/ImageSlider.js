import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel';

const WINDOW_HEIGHT = Dimensions.get("window").height
const SLIDER_HEIGHT = Math.round(WINDOW_HEIGHT * 0.45)
const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = Math.round(SLIDER_WIDTH)

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={{...styles.container}} key={index}>
          <Image source={{uri: item.imageuri}} style={styles.image}/>
        </View>
    )
}

const ImageSlider = ({data}) => {
  console.log(data)
    const isCarousel = React.useRef(null)
    const [index, setIndex] = React.useState(0)
    return (
      <>
        <Carousel
          layout="default"
          layoutCardOffset={5}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          sliderHeight={SLIDER_HEIGHT}
          inactiveSlideShift={0}
          useScrollView={true}
          onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                backgroundColor: '#000000'
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
        />
      </>
    )
}

export default ImageSlider

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    backgroundColor: '#ffffff'
  },
  image: {
    width: ITEM_WIDTH,
    height: SLIDER_HEIGHT,
    resizeMode: 'contain'
  },
})
