import { useCheckoutStore } from "@/stores/checkout-store";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { generateMessage } from "@/lib/generate-message";


export default function StepFinish() {

  const { name } = useCheckoutStore(state => state)
  const message = generateMessage()
  const linkWhatsapp = `https://wa.me//${process.env.NEXT_PUBLIC_WHATSAPP}?text=${encodeURI(message)}`
  return (

    <div className="text-center flex flex-col gap-5">
      <p>Perfeito <strong>{name}</strong>!</p>
      <p>Agora envie o seu pedido ao nosso whatsapp para concluir. Nosso atendente irá te guiar sobre o andamento do seu pedido</p>
      <Button>
        <Link target="_blank" href={linkWhatsapp}>Enviar pedido para o Whatsapp</Link>
      </Button>
    </div>

  )
}
