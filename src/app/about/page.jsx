export default function About() {
  const h1 = "mt-10 mb-6 text-2xl font-bold"
  const h2 = "mt-8 mb-4 text-xl font-bold"
  const p = "mt-4 mb-2" 

  return(
    <main>
      <h1 className={h1}>Sobre a Newsletter "Front-End Insights"</h1>
      
      <h2 className={h2}>O que é a Front-End Insights?</h2>
      <p className={p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam neque, modi ea nemo eveniet cupiditate id mollitia ratione architecto? Rem omnis dolore, distinctio fuga illo tenetur in aliquam cupiditate odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ab blanditiis dolorum animi similique, commodi, ipsum possimus delectus iusto obcaecati dignissimos eum unde minus optio odit facere voluptatibus velit placeat?</p>

      <h2 className={h2}>Por que assinar a Front-End Insights?</h2>
      <ol>
        <li><strong>Conhecimento atualizado:</strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores deleniti dolore possimus reprehenderit voluptatem quo ex fuga? Modi unde nobis, corporis eaque sapiente iure adipisci corrupti sunt, facilis vero laborum?</li>
        <li><strong>Dicas e truques exclusivos:</strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores deleniti dolore possimus reprehenderit voluptatem quo ex fuga? Modi unde nobis, corporis eaque sapiente iure adipisci corrupti sunt, facilis vero laborum?</li>
        <li><strong>Recursos selecionados:</strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores deleniti dolore possimus reprehenderit voluptatem quo ex fuga? Modi unde nobis, corporis eaque sapiente iure adipisci corrupti sunt, facilis vero laborum?</li>
      </ol>

      <h2 className={h2}>Quem está por trás da Front-End Insights?</h2>
      <p className={p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum, earum quis velit, est deserunt fugiat veniam vitae consectetur cupiditate eligendi? Consectetur suscipit totam esse magnam possimus quasi necessitatibus id.
      <br /><br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dicta aliquid est rem iusto reprehenderit expedita magnam illum facere voluptatum voluptatem tempora ullam magni, non illo dignissimos eveniet fugiat consequatur?
      </p>
    </main>
  )
}