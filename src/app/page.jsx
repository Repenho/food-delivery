// Importar el hook desde 'next/navigation'
'use client';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();



  useEffect(() => {
    // Redirigir después de 2 segundos
    const timer = setTimeout(() => {
      router.push('/login'); // La ruta debe ser en minúsculas
    }, 2000);

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, [router]);

  // Usar setInterval para llamar a 'carga' cada 2 segundos
  

  return (
    <div className="w-[100%] h-[100%] bg-[#FF6B57] absolute flex justify-center items-center overflow-hidden">
      <figure className="w-[260.72px] h-[325.04px] absolute bottom-[-5%] right-[0]">
        <Image 
          src="/images/inicio-lineas.png" // Ruta correcta desde la carpeta public
          alt="Inicio" 
          width={1920} 
          height={1080} 
        />
      </figure>
      <figure className="w-[260.72px] h-[325.04px] absolute top-0 left-0">
        <Image 
          className="rotate-180"
          src="/images/inicio-lineas.png" // Ruta correcta desde la carpeta public
          alt="Inicio" 
          width={1920} 
          height={1080} 
        />
      </figure>
      <figure>
        <Image 
          src="/logo-comida.png" // Ruta correcta desde la carpeta public
          alt="Inicio" 
          width={188} 
          height={186} 
        />
        <h1 className="text-white text-4xl font-bold text-center">
          Comida
        </h1>
      </figure>
    </div>
  );
}
