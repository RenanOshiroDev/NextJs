import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  try {
    const { nome, email, senha } = await request.json()

    // Validações básicas
    if (!nome || !email || !senha) {
      return NextResponse.json(
        { error: 'Dados incompletos' },
        { status: 400 }
      )
    }

    // Verifica se o email já está cadastrado
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { email }
    })

    if (usuarioExistente) {
      return NextResponse.json(
        { error: 'Email já cadastrado' },
        { status: 400 }
      )
    }

    // Hash da senha
    const salt = await bcrypt.genSalt(10)
    const senhaHash = await bcrypt.hash(senha, salt)

    // Cria o usuário
    const usuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: senhaHash,
      },
    })

    // Remove a senha do objeto de retorno
    const { senha: _, ...usuarioSemSenha } = usuario

    return NextResponse.json(usuarioSemSenha, { status: 201 })
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error)
    return NextResponse.json(
      { error: 'Erro ao criar conta' },
      { status: 500 }
    )
  }
}
