import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
        <Text>Profile Screen</Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quae molestiae tempora fugiat quos voluptas eveniet totam facere, quo nesciunt iusto veritatis, culpa possimus fugit reprehenderit rerum sequi aut rem!
          Voluptates recusandae at tempora iste accusamus a quasi ducimus commodi laborum? Similique asperiores corporis sint saepe doloremque! Ipsa, neque quibusdam. Odio nam non vel dolores, doloribus sunt modi totam veritatis.
          Sit eius consectetur nisi? Optio earum adipisci ipsum excepturi quam fugiat delectus veritatis atque, rem nisi esse perspiciatis assumenda? Provident voluptatem nisi ab at, molestias ullam velit sapiente rerum iusto.
          Enim unde totam, molestias numquam quae consectetur voluptatibus expedita magnam minus libero itaque fugit recusandae temporibus porro at odit quasi asperiores reiciendis dolores ad ipsum. Tempora magni ipsum labore unde?
          Dolores deleniti suscipit placeat, sed quam dolorum animi quas unde ut doloribus blanditiis praesentium incidunt nesciunt vero distinctio minus illum illo sapiente asperiores itaque quae libero repudiandae, autem officia. Tempore.
          Id accusantium cum praesentium voluptatibus exercitationem aliquid, accusamus earum mollitia provident labore quo tempore officiis magni harum, doloribus sit porro alias expedita eaque dolore. Laudantium amet dolorem ipsam tempora error.
          Doloribus dolores nulla velit inventore quam, eius corrupti, eaque nihil accusantium accusamus deleniti, architecto labore cumque! Sequi ex voluptates quibusdam molestias necessitatibus nesciunt quae, earum, temporibus pariatur itaque rerum mollitia!
          Magni sed fugit quo provident quasi error consequuntur consectetur quisquam sint optio ratione maxime quas, deserunt velit debitis, quae ab sit minus enim iste. In sit assumenda qui quod delectus?
          Quibusdam provident ipsum dolor aut odio eaque consectetur obcaecati voluptate dignissimos quae in voluptatem dolorum sequi tenetur, exercitationem nulla maxime assumenda officiis a adipisci? Eveniet et repellat pariatur veritatis obcaecati?
          Expedita ad eligendi natus et id. Exercitationem natus repudiandae corporis? Repudiandae ducimus deserunt porro nemo, saepe voluptas at, debitis veritatis cum enim quas soluta unde. Velit, delectus perspiciatis. Doloribus, vero.
          Eveniet ducimus a eum iure molestias ullam ab inventore tenetur veniam, iste, eaque eos nam, ut consequuntur minima. Quos, amet! Qui quod saepe ipsam aut ipsa maxime quaerat doloribus cupiditate.
          Expedita explicabo consectetur sapiente, sed dicta non veritatis quia id eum quae, repellendus sunt, nostrum saepe fuga. Incidunt pariatur laborum cumque sunt vel? Placeat a nemo suscipit eaque aliquam qui!
          Iusto iste explicabo nemo animi consectetur libero voluptate enim temporibus fugiat, cum ducimus atque inventore ipsa eos, eaque earum repudiandae! Suscipit nemo est quos quisquam veritatis ipsam cupiditate a facere!
          Adipisci, blanditiis cupiditate! Minima sunt suscipit officia dolorum, alias facilis! Officia animi molestiae totam vero doloribus tempora omnis soluta facilis sed, accusamus obcaecati nisi illum! In, amet explicabo. At, dicta.
          Iste dolorem, deleniti harum amet nostrum praesentium ipsum soluta assumenda vitae itaque. Dignissimos quaerat mollitia, iure, illum perferendis consectetur unde laboriosam nesciunt cupiditate vel ullam voluptatibus quasi reiciendis qui! Similique?
          Esse, mollitia nobis ab cumque veritatis obcaecati possimus totam voluptates laboriosam! Ipsa quibusdam quaerat perferendis recusandae labore cumque consequuntur sapiente error dicta? Excepturi debitis itaque, rerum est ipsum consequuntur atque!
          Minima, dolores! Modi beatae amet accusantium vel officia voluptatum hic. Neque, architecto in soluta commodi quod veniam aut omnis. Nobis impedit autem, inventore sapiente qui quidem! Commodi, earum molestias! Sequi.
          Dolores laboriosam blanditiis quidem id. Id perspiciatis fuga labore vel asperiores, voluptas, dolores aut illum ut quaerat sequi, magni recusandae mollitia deleniti rem ad numquam corrupti possimus alias explicabo eaque!
          Itaque veniam culpa sequi fuga dicta laudantium voluptatem placeat explicabo laboriosam ipsa, magnam facere debitis quaerat facilis ut quasi assumenda nam, quisquam beatae dolores? Quis nobis inventore magni provident ratione.
          Libero laboriosam blanditiis eveniet fuga reiciendis, nisi vero incidunt ipsa commodi itaque enim maxime? Non iusto magni eligendi quae, rerum incidunt, et dolore sunt totam praesentium natus laborum blanditiis sed.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
