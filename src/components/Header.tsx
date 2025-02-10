'use client'

import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'

export default function Header() {
  const { usuario, logout, isAuthenticated } = useAuth()

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          Loja Online
        </Link>
        
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <span className="text-gray-700">Olá, {usuario?.nome}</span>
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Sair
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Entrar
            </Link>
          )}
        </div>
      </div>
    </header>
  )
} 