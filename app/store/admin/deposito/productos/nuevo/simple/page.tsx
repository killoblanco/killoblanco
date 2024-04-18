import { IconBackBtn } from "@/ui/components/back-btn";
import SimpleProductForm from "../../forms/simple";

const NewSingleProductPage = () => {
  return (
    <>
      <div className="inline-flex gap-4 items-center">
        <IconBackBtn />
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Nuevo Producto Simple
        </h3>
      </div>
      <SimpleProductForm />
    </>
  )
}

export default NewSingleProductPage;
