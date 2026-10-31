import './style.css'
import { useState } from 'react'; 
import { toast } from 'react-toastify';
import api from '../../services/api';


export default function CadastroPage() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [telefone, setTelefone] = useState('');

    async function cadastrar (evento){
        // Impede o comportamento padrão do formulário
        evento.preventDefault();

        
        try{
            // Faz a requisição para cadastrar o aluno
            await api.post('/alunos', {nome, idade, telefone})

            // Exibe uma mensagem de sucesso
            toast.success('Aluno cadastrado com sucesso!')
            setNome('')
            setIdade('')
            setTelefone('')

            // Redireciona para a página de listagem de alunos
        } catch (error){
                toast.error('Erro ao cadastrar aluno. Tente novamente.')
            }
        }

        return(
    
            < className='cadastro-page'>
                <form onSubmit={cadastrar}>
                    <h1>Cadastro de Alunos</h1>
                    <label>Nome:
                    <input 
                        id='nome'
                        type='text'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        />
                    <label>Idade:</label>
                    Idade:
                    input 
                        id='idade'
                        type='number'
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        required
                    
                    <br />
                    <label>Telefone:</label>
                    Telefone:
                    input 
                        id='telefone'
                        type='text'
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                        />
                        </label>


                    <button type='submit'>Cadastrar</button>
                </form>
            </div>
        );
    }
