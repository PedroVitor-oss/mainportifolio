import { } from 'react'
import '../../css/Contact.css'
function Contact() {
    return (
        <section id="Contact">
            <main>
                <div className="title flex-col justify-center items-center text-center">
                    <span className="tracking-widest">CONTATO</span>
                    <h1 className="text-4xl">Vamos fazer algo novo</h1>
                    <p className='w-200 m-auto'>Precisa de um site, landing page, sistema de automação ou qualquer solução digital? Vamos conversar sobre como posso ajudar seu projeto a decolar.</p>
                </div>
                <div className="toface flex flex-row  mt-10 mb-10">
                    <div className="right text-left flex-1  pl-20">
                        <h2 className='text-2xl font-bold'>Dados pra contato</h2>
                        <ul>
                            <li className='flex flex-row items-center gap-5'>
                                <i class="fa-regular fa-envelope text-gray-400"></i>
                                <div className=''>
                                    <span className='text-gray-400'>Email</span>
                                    <p className='font-bold'>pedrovitofsantos22@gmail.com</p>
                                </div>
                            </li>
                            <li className='flex flex-row items-center gap-5'>
                                <i class="fa-solid fa-phone text-gray-400"></i>
                                <div className=''>
                                    <span className='text-gray-400'>Telefone</span>
                                    <p className='font-bold'>(41) 98538-3674</p>
                                </div>
                            </li>
                            <li className='flex flex-row items-center gap-5'>
                                <i class="fa-brands fa-whatsapp text-gray-400"></i>
                                <div className=''>
                                    <span className='text-gray-400'>WhatsApp</span>
                                    <p className='font-bold'>(41) 99597-3828</p>
                                </div>
                            </li>
                            <li className='flex flex-row items-center gap-5'>
                                <i class="fa-solid fa-location-dot text-gray-400"></i>
                                <div className=''>
                                    <span className='text-gray-400'>Email</span>
                                    <p className='font-bold'>pedrovitofsantos22@gmail.com</p>
                                </div>
                            </li>
                            <li className='mt-5 '>
                                <a className='mr-1  text-gray-500' href="http://github.com/PedroVitor-oss" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-github "></i>
                                </a>
                                <a href="https://www.linkedin.com/in/pedro-vitor-903304288/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin"></i>
                                    </a>
                            </li>
                        </ul>
                    </div>
                    <div className="left text-left flex-1 border-bs-indigo-500">
                        <h1 className='font-bold text-6xl mb-5'>SO CHAMAR!!</h1>
                        <p>Pronto para lançar seu próximo projeto? Preencha o formulário abaixo ou entre em contato diretamente para iniciar uma conversa sobre as necessidades da sua empresa e como podemos ajudá-lo a crescer.</p>
                    </div>
                </div>

            </main>
        </section>
    )
}

export default Contact