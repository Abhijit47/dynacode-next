import AuthBackgroundShape from './_components/auth-background-shape';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <section className='relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8'>
        <div className='absolute pointer-events-none'>
          <AuthBackgroundShape />
        </div>
        {children}
      </section>
    </main>
  );
}
