import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    padding: 20,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primaryColor,
  },
  hiContainer: {
    marginTop: 24,
  },
  hiText: {
    fontSize: 20,
    fontWeight: '900',
    color: Colors.primaryColor,
  },
  hiSecondaryText: {
    fontSize: 15,
    color: Colors.primaryColor,
    marginTop: 5,
  },
  hiImage: {
    width: 20,
    height: 20,
    marginLeft: 4,
    resizeMode: 'contain',
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherContainer: {
    alignSelf: 'flex-end',
  },
  weatherImage: {
    marginLeft: 20,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  weatherText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primaryColor,
  },
  happyScoreText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primaryColor,
  },
  liveText: {
    marginLeft: 6,
    fontSize: 12,
    color: Colors.color1,
  },
  chartContainer: {
    flexDirection: 'row',
    height: 100,
    marginTop: 20,
  },
  chartItemContainer: {
    marginRight: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  chartBarStyle: {
    width: 6,
    borderRadius: 10,
  },
  chartLabelStyle: {
    fontSize: 12,
    marginTop: 4,
    color: Colors.primaryColor,
  },
  chartSmallDot: {
    position: 'absolute',
    bottom: -8,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: Colors.color1,
    marginTop: 10,
  },
  findOutText: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.color3,
    color: Colors.color3,
    paddingBottom: 1,
    marginRight: 4,
  },
  cardContainer: {
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    padding: 10,
    paddingVertical: 20,
  },
});

export default styles;
