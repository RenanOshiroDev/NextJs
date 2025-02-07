import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Bem-vindo à nossa Loja Online</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Produtos em Destaque</h2>
          <p className="text-gray-600">Confira nossos produtos mais vendidos</p>
          <Link href="/produtos" className="text-blue-500 hover:underline mt-4 inline-block">
            Ver produtos
          </Link>
        </div>

        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Categorias</h2>
          <p className="text-gray-600">Explore nossas categorias</p>
          <Link href="/categorias" className="text-blue-500 hover:underline mt-4 inline-block">
            Ver categorias
          </Link>
        </div>

        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Ofertas Especiais</h2>
          <p className="text-gray-600">Aproveite nossos descontos</p>
          <Link href="/ofertas" className="text-blue-500 hover:underline mt-4 inline-block">
            Ver ofertas
          </Link>
        </div>
      </div>
    </main>
  )
} 