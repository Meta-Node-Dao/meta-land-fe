import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const currentYear = new Date().getFullYear()
    return {
      currentYear
    }
  },
  render() {
    return (
      <div class="border-color-border border-t-1 mt-10 text-center pt-4 pb-6 text-color2">
        Powered by
        <a class="text-primary px-1" href="https://www.remotecodecamp.top" target="_blank">
          MetaNode
        </a>
        ©{this.currentYear}
      </div>
    )
  }
})
