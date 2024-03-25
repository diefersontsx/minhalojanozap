import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

interface CouponFormProps {
  onSubmit: (couponCode: string) => void
}

export default function CouponForm({ onSubmit }:CouponFormProps) {

  const { register, handleSubmit, formState: {erros} } = useForm()
  const handleFormSubmit = handleSubmit((data) => {
    onSubmit(data.couponCode)
  })

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex items-center">
          <Input 
            {...register('couponCode', {required: true})}
            placeholder="Digite o código de cupom"
            className="mr-3"
          />
          {erros.couponCode && <span className="text-red-500 text-xs">Cupom obrigatório</span>}
          <Button type="submit">Aplicar</Button>

      </div>
    </form>
  )
}