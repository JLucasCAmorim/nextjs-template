import React, { useCallback, useRef } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useToast } from '~/hooks/toast'
import getValidationErrors from '~/utils/getValidationErrors'

import Input from '~/components/shared/Input'
import { Button } from 'reactstrap'
import {
  Container,
  Content,
  AnimationContainer,
  Background,
} from '~/styles/pages/Login'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { addToast } = useToast()

  const router = useRouter()

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        /*
          await signIn({
          email: data.email,
          password: data.password,
        })
        */

        router.push('/dashboard')
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        })
      }
    },
    [addToast, router]
  )

  return (
    <Container className="bg-black">
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1 className="text-white">Faça seu logon</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button className="mt-5" block type="submit">
              Entrar
            </Button>

            <a href="forgot">Esqueci minha senha</a>
          </Form>

          <Link href="/admin/dashboard">
            <a>
              <FiLogIn />
              Criar conta
            </a>
          </Link>

          <Link href="/">
            <a>Voltar</a>
          </Link>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  )
}

export default SignIn
