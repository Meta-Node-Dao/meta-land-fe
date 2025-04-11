import { defineComponent } from 'vue'
import Title from '../title'

import img_p1 from '@/assets/20220725/parent1.png'
import img_p1_2 from '@/assets/20220725/parent1@2x.png'
import img_p1_3 from '@/assets/20220725/parent1@3x.png'

// import img_p2 from '@/assets/20220725/parent2.png'
// import img_p2_2 from '@/assets/20220725/parent2@2x.png'
// import img_p2_3 from '@/assets/20220725/parent2@3x.png'

import img_p3 from '@/assets/20220725/parent3.png'
import img_p3_2 from '@/assets/20220725/parent3@2x.png'
import img_p3_3 from '@/assets/20220725/parent3@3x.png'
import { handleSrcset } from '@/utils/srcset'

export default defineComponent({
  name: 'Partners',
  setup() {
    const list = [
      [img_p1, img_p1_2, img_p1_3],
      [img_p3, img_p3_2, img_p3_3]
      // [img_p2, img_p2_2, img_p2_3],
    ]
    return () => (
      <>
        <Title title="PARTNERS" />
        {/* <div class="max-w-[1120px] mx-auto my-78px grid gap-x-30px gap-y-24px grid-cols-3 justify-center <sm:gap-x-4  <sm:gap-y-4 <sm:px-4"> */}
        <div class="max-w-[1120px] mx-auto my-78px flex justify-center <sm:grid <sm:gap-y-4 <sm:grid-cols-2 <sm:gap-x-4 <sm:px-4">
          {list.map((item, $index) => {
            const srcset = handleSrcset(item)
            return <img srcset={srcset} src={item[0]} class="m-2 <md:m-0" />
          })}
        </div>
      </>
    )
  }
})
