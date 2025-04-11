import {
  USpin,
  FormFactoryField,
  FormInst,
  getFieldsRules,
  UButton,
  UForm,
  UFormItemsFactory,
  message
} from '@comunion/components'
import { defineComponent, ref, reactive, PropType, watch } from 'vue'
import { services } from '@/services'

type SecurityType = {
  kyc: string
  contract_audit: string
}

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<SecurityType>,
      required: true
    },
    startup_id: {
      type: Number,
      required: true
    }
  },
  emits: ['saved', 'edit'],
  setup(props, ctx) {
    const loading = ref(false)

    const info = reactive({
      kyc: props.data.kyc || '',
      contract_audit: props.data.contract_audit || ''
    })

    watch(
      () => info,
      () => {
        console.log(11111111111, 'security change')
        ctx.emit('edit')
      },
      {
        deep: true
      }
    )

    const KycTitle = () => (
      <>
        KYC
        <small class="text-12px text-[#979797]">
          &nbsp;&nbsp;&nbsp;Get KYC via{' '}
          <a href="http://assuredefi.com/" target="_blank" class="underline hover:text-[#1f2225]">
            assuredefi.com
          </a>
        </small>
      </>
    )
    const ContractTitle = () => (
      <>
        Contract Audit
        <small class="text-12px text-[#979797]">
          &nbsp;&nbsp;&nbsp;Get Audit via{' '}
          <a href="https://cyrex.tech/" target="_blank" class="underline  hover:text-[#1f2225]">
            cyrex.tech
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="https://hacken.io/" target="_blank" class="underline  hover:text-[#1f2225]">
            hacken.io
          </a>
        </small>
      </>
    )

    const fields: FormFactoryField[] = [
      {
        t: 'string',
        title: (<KycTitle />) as any,
        name: 'kyc',
        placeholder: 'Input project KYC',
        rules: [
          {
            validator: (rule, value) =>
              !value ||
              (value && value.startsWith('https://')) ||
              (value && value.startsWith('http://')),
            message: 'Invalid URL',
            trigger: 'blur'
          }
        ],
        onBlur: (e: Event) => {
          const oIpt = e.target as HTMLTextAreaElement
          if (!oIpt!.className.includes('truncate')) {
            oIpt!.className = oIpt!.className + ' ' + 'truncate'
          }
        }
      },
      {
        t: 'string',
        title: (<ContractTitle />) as any,
        name: 'contract_audit',
        placeholder: 'Input project contract audit',
        rules: [
          {
            validator: (rule, value) =>
              !value ||
              (value && value.startsWith('https://')) ||
              (value && value.startsWith('http://')),
            message: 'Invalid URL',
            trigger: 'blur'
          }
        ],
        onBlur: (e: Event) => {
          const oIpt = e.target as HTMLTextAreaElement
          if (!oIpt!.className.includes('truncate')) {
            oIpt!.className = oIpt!.className + ' ' + 'truncate'
          }
        }
      }
    ]
    const form = ref<FormInst>()

    return {
      loading,
      fields,
      form,
      info
    }
  },
  render() {
    const handleSubmit = () => {
      this.form?.validate(async err => {
        if (!err) {
          // loadding
          this.loading = true
          await services['Startup@update-startup-security']({
            startup_id: this.startup_id,
            kyc: this.info.kyc,
            contract_audit: this.info.contract_audit
          })
          this.loading = false
          message.success('Successfully saved')
          this.$emit('saved')
        }
      })
    }

    const rules = getFieldsRules(this.fields)
    return (
      <USpin show={this.loading}>
        <div class="bg-white border rounded-sm mb-6 min-h-200 p-10 relative overflow-hidden">
          <UForm rules={rules} model={this.info} ref={(ref: any) => (this.form = ref)}>
            <UFormItemsFactory fields={this.fields} values={this.info} />
          </UForm>
          <div class="flex mt-10 items-center justify-end">
            <UButton class="w-30" type="primary" size="small" onClick={handleSubmit}>
              Save
            </UButton>
          </div>
        </div>
      </USpin>
    )
  }
})
