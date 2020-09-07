import { StyleSheet, ViewStyle, TextStyle, Dimensions, PixelRatio } from 'react-native';

const mainConteiner: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
}

const container: ViewStyle = {
  backgroundColor: '#fff',
  justifyContent: "center",
}

const previewContainer: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "space-evenly",
}

const wordStyle: TextStyle = {
  fontSize: PixelRatio.get()*10,
  textAlign: "center",
  textAlignVertical: "center",
  borderBottomLeftRadius: 5,
  borderTopLeftRadius: 5,
  width: (Dimensions.get("window").width) / 1.5,
};

const textStyle: TextStyle = {
  fontSize: PixelRatio.get()*10,
  textAlign: "center",
  marginHorizontal: 20,
};

const wordSelected: ViewStyle = {
  backgroundColor: "mediumseagreen",
  color: "white",
  ...wordStyle
};

const wordNotSelected: ViewStyle = {
  backgroundColor: "gainsboro",
  ...wordStyle
};

const wordContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "flex-start",
  marginBottom: Dimensions.get("window").height / 20,
  height: Dimensions.get("window").height / 9,
};

const checkWord: TextStyle = {
  backgroundColor: "gainsboro",
  height: Dimensions.get("window").height / 9,
  width: Dimensions.get("window").height / 9,
  borderBottomRightRadius: 5,
  borderTopRightRadius: 5,
  justifyContent: "center",
  alignItems: "center"
};

const bottomMenu: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-around",
};

interface Styles {
  container: ViewStyle,
  wordSelected: ViewStyle,
  wordNotSelected: ViewStyle,
  wordContainer: TextStyle,
  checkWord: ViewStyle,
  bottomMenu: ViewStyle,
  mainConteiner: ViewStyle,
  wordStyle: TextStyle,
  textStyle: TextStyle,
  previewContainer: ViewStyle
}

export default StyleSheet.create<Styles>({
  container,
  wordSelected,
  wordNotSelected,
  wordContainer,
  checkWord,
  bottomMenu,
  mainConteiner,
  wordStyle,
  textStyle,
  previewContainer
});