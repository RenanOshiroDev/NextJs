import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'sua-chave-secreta'

export async function POST(request: Request) {
  try {
    const { email, senha } = await request.json()

    // Validações básicas
    if (!email || !senha) {
      return NextResponse.json(
        { error: 'Email e senha são obrigatórios' },
        { status: 400 }
      )
    }

    // Busca o usuário
    const usuario = await prisma.usuario.findUnique({
      where: { email }
    })

    if (!usuario) {
      return NextResponse.json(
        { error: 'Credenciais inválidas' },
        { status: 401 }
      )
    }

    // Verifica a senha
    const senhaValida = await bcrypt.compare(senha, usuario.senha)
    if (!senhaValida) {
      return NextResponse.json(
        { error: 'Credenciais inválidas' },
        { status: 401 }
      )
    }

    // Gera o token JWT
    const token = jwt.sign(
      { 
        userId: usuario.id,
        email: usuario.email 
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    // Remove a senha do objeto de retorno
    const { senha: _, ...usuarioSemSenha } = usuario

    return NextResponse.json({
      usuario: usuarioSemSenha,
      token
    })
  } catch (error) {
    console.error('Erro ao fazer login:', error)
    return NextResponse.json(
      { error: 'Erro ao fazer login' },
      { status: 500 }
    )
  }
}
