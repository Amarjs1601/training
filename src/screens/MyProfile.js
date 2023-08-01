import {View, Text} from 'react-native';
import Delivery from '../components/delivery/Delivery';
import {ScrollView} from 'react-native';

import BillDetails from '../components/billdetailscomponents/BillDetails';
import ShowCart from '../components/showcartcomponent/ShowCart';
import FeedingIndia from '../components/feedingindiacomponent/FeedingIndia';
import DeliveryInstruction from '../components/deliveryinstruction/DeliveryInstruction';
import Tip from '../components/tipcomponet/Tip';
import ImgComponent from '../components/imgcomponent/ImgComponent';

export default function MyProfile() {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Delivery />
        <ShowCart />
        <BillDetails />
        <View>
          <FeedingIndia />
        </View>
        <DeliveryInstruction />
        <Tip />
      </ScrollView>

      
    </View>
  );
}
