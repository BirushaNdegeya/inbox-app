import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <ScrollView>

      <View style={styles.container}>
        {/* <Text style={styles.title}>Tab One</Text> */}
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
        {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
        <Text style={{
          fontSize: 30,
          marginBottom: 10
        }}>Home Screen Page</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, suscipit ipsa inventore sapiente quaerat voluptas. Omnis distinctio voluptatem iure ducimus, dolorem molestiae ea veniam eaque est iusto iste vero eligendi.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur officiis quaerat, voluptatem porro quibusdam corporis omnis esse aliquid minima illo dolores odit quae dignissimos cupiditate? Ipsa suscipit dolores minus aliquam.
          Facere aspernatur ducimus, asperiores eveniet ipsam corporis inventore molestias officia doloribus sequi iste quam consequuntur, nulla maiores ut possimus fugiat deleniti dolor natus nihil libero minus, similique nisi. Libero, nesciunt.
          Libero, perferendis odio id omnis officiis, amet veniam nam provident illo quae perspiciatis dolore autem excepturi quas numquam? Voluptas quisquam eum fugit magnam, ducimus dicta voluptatibus similique cum possimus quibusdam?
          Ullam excepturi odit illum, maxime minima quis sint dolorem dolore magni. Labore, unde. Labore voluptates numquam, quas officia ad praesentium blanditiis aut exercitationem ab ea nesciunt repudiandae nisi incidunt. Ut.
          Illum dolorem doloribus molestiae recusandae ratione aperiam autem dolores consequuntur repudiandae, animi molestias tempora sapiente nemo suscipit aut sunt iure alias et, eligendi reprehenderit similique blanditiis ducimus quisquam! Ratione, adipisci?
          Cum a beatae in, tempore dolorem aliquam? Distinctio esse alias nemo eaque ea libero! Unde eaque sequi nisi ipsa ullam at corrupti officiis error fugit molestiae laboriosam, laudantium voluptatibus nam.
          Soluta nemo saepe impedit quia molestias rerum voluptates optio sunt modi laudantium! Vitae fuga quaerat, temporibus sit corporis molestiae ipsam inventore quia quae a optio quos, dolores nulla voluptatem minima.
          Illum, quaerat reiciendis! Ad quia rerum ipsam consectetur voluptatibus, sint libero id explicabo repellat pariatur! Obcaecati, ratione placeat nobis quis sint suscipit repellat, sit cupiditate voluptas ad, perferendis itaque libero.
          Non quia ipsum molestiae deserunt necessitatibus saepe inventore, aliquid nemo dolore, nulla mollitia iusto rerum consequatur placeat facere quos nihil reiciendis eos voluptas minima? Iure eos quis iusto labore tempore?
          Fugiat minima sint deleniti iure quisquam cupiditate eligendi? Consequuntur numquam autem molestias ut eveniet id neque enim dolores veniam nihil laboriosam, earum beatae non eaque incidunt laudantium tenetur. Non, fuga.
          Nesciunt molestiae veniam, ipsam consequatur vero provident sint itaque eos numquam rem ipsum error fugit optio. Delectus error voluptate consectetur, aut quas, aliquid dicta placeat assumenda nesciunt labore omnis expedita.
          Aliquid corrupti deserunt vitae, ea nesciunt hic? Eaque, amet odit enim mollitia saepe molestias facere porro nisi velit totam voluptas consequuntur ipsam itaque recusandae! In saepe quisquam nemo aliquid sit?
          Veritatis molestias dignissimos et, nihil veniam commodi corporis qui quasi deserunt provident repellendus ipsum explicabo sed! Eveniet debitis consequatur modi incidunt commodi quae deleniti fuga quasi excepturi rerum? Nulla, omnis.
          Sequi voluptate placeat sed officiis ea quibusdam minima vitae facilis veritatis accusamus, est porro animi quisquam non architecto? Voluptatibus excepturi quisquam velit minus rem nesciunt quo, magni aperiam illo eveniet?
          Iure, illo animi non veritatis, corporis repudiandae rem quae doloremque beatae ea odit, iste deserunt quod ipsa impedit exercitationem laudantium quibusdam aliquid voluptatibus! Sint veniam enim perspiciatis, ipsa voluptatem ab!
          Iusto, totam quam! Quas possimus omnis animi, expedita hic pariatur cupiditate libero, accusantium veniam quibusdam neque molestias voluptatum et beatae dignissimos laborum tempore sequi nobis quia? Eligendi, ratione. Possimus, provident!
          Quasi earum a autem. Exercitationem quod voluptas et obcaecati repellendus quam facilis dicta vitae consequuntur iusto? Iure ipsa placeat facere voluptatem, est amet ab enim facilis beatae? Eaque, modi. Explicabo.
          Temporibus, recusandae. Consequuntur, id soluta! Qui nisi sunt, illo maiores quidem deleniti sit. Quidem nemo doloremque vitae non tempore, deserunt, dolorem, incidunt maxime optio eius doloribus explicabo fugit iusto quis.
          In reprehenderit eum repellendus odio saepe consequuntur ullam. Culpa officia nesciunt ad quasi corrupti. Suscipit ratione laboriosam porro velit, sequi, excepturi ullam nulla nisi consequuntur facere in eius, atque rem?
          Obcaecati odio accusamus fugiat perferendis possimus culpa dolorum iste expedita voluptate explicabo, aspernatur temporibus adipisci libero illum odit minima suscipit similique unde laboriosam officia voluptatibus! Ex omnis sit iusto consectetur?
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
