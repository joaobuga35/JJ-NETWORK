import Link from "next/link";

export default function Login() {
  return (
    <main>
      <h1 className="font-mont-bold font-semibold text-center text-xl mt-14">
        JJ NETWORK
      </h1>

      <div>
        <form>
          <h2>Login</h2>

          <label htmlFor="email">E-mail</label>
          <input type="email" />

          <label htmlFor="password">Password</label>
          <input type="password" />

          <div>
            <button className="btn-primary-blue" type="submit">Entrar</button>
            <span>Ainda não possui uma conta?</span>
            <Link href={'/register'}>Cadastre-se</Link>
          </div>
        </form>
      </div>
    </main>
  );
}
