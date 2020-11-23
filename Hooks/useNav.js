import {useNavigation} from '@react-navigation/native';

export default function () {
  const navigation = useNavigation();

  return {
    ...navigation,
    navigation,
  };
}
