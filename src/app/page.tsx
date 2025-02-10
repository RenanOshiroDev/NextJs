import Link from 'next/link'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">
          Bem-vindo à Loja Online
        </h1>
        
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
    </div>
  )
} 