'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'

export default function Header() {
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-indigo-600">
              Loja Online
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <Link href="/produtos" className="text-gray-700 hover:text-indigo-600">
              Produtos
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link href="/pedidos" className="text-gray-700 hover:text-indigo-600">
                  Meus Pedidos
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-indigo-600"
                >
                  Sair
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-700 hover:text-indigo-600">
                  Entrar
                </Link>
                <Link href="/cadastro" className="text-gray-700 hover:text-indigo-600">
                  Cadastrar
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
} 