import { StyleSheet } from 'react-native';

const mainConteiner = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
}

const container = {
  backgroundColor: '#fff',
  justifyContent: "center",
}

const wordStyle = {
  fontSize: 44,
  textAlign: "center",
  padding: 10,
  borderBottomLeftRadius: 5,
  borderTopLeftRadius: 5,
  minWidth: 300,
};

const wordSelected = {
  backgroundColor: "mediumseagreen",
  color: "white",
  ...wordStyle
};

const wordNotSelected = {
  backgroundColor: "gainsboro",
  ...wordStyle
};

const wordContainer = {
  flexDirection: "row",
  justifyContent: "flex-start",
  marginBottom: 20,
  height: 80,
};

const checkWord = {
  backgroundColor: "gainsboro",
  height: 80,
  width: 80,
  borderBottomRightRadius: 5,
  borderTopRightRadius: 5,
  justifyContent: "center",
  alignItems: "center"
};

const bottomMenu = {
  marginTop: 50,
  flexDirection: "row",
  justifyContent: "space-around",
};

export default StyleSheet.create({
  container,
  wordSelected,
  wordNotSelected,
  wordContainer,
  checkWord,
  bottomMenu,
  mainConteiner,
});