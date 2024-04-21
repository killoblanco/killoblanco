import ProductMediaSelectorField from '../fields/media-selector'
import { ProductAttributesInfoGroup } from './components/attributes'
import { ProductDescriptionInfoGroup } from './components/description'
import { ProductGeneralInfoGroup } from './components/general'
import { SimpleProductInventoryInfoGroup } from './components/inventory'
import { ProductPriceInfoGroup } from './components/price'
import { ProductShipmentInfoGroup } from './components/shipment'

const SimpleProductForm = (): JSX.Element => {
  return (
    <section className="grid grid-cols-3 gap-4">
      <div className="space-y-4 col-span-2">
        <ProductMediaSelectorField />
        <ProductDescriptionInfoGroup />
        <ProductAttributesInfoGroup />
      </div>
      <div className="space-y-4 col-span-1">
        <ProductGeneralInfoGroup />
        <ProductPriceInfoGroup />
        <SimpleProductInventoryInfoGroup />
        <ProductShipmentInfoGroup />
      </div>
    </section>
  )
}

export default SimpleProductForm
