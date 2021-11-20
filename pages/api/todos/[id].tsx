import { TodoType } from '../../todos';
import {todos} from '../../data'
import {NextApiRequest, NextApiResponse} from 'next'

// const handler = ({query:{id}}:NextApiRequest, res:NextApiResponse) => {
    
//     let filtered: TodoType[] = [];
//     if(typeof(id) === 'string'){
//     filtered = todos.filter(todo => todo.id === parseInt(id))
//     }
//     filtered.length > 0 ? res.status(200).json(filtered[0]) :
//     res.status(400).json({message: `Page at id:${id} was not found`});
// }

const handler = ({query:{id}}: NextApiRequest, res : NextApiResponse) => {

    let filtered: TodoType[] = [];
    typeof(id) === 'string' ? filtered = todos.filter(todo => todo.id === parseInt(id)) : filtered;
    filtered.length > 0 ? res.status(200).json(filtered[0]) : res.status(404).json({message: `Page at id:${id} was not found`});

}

export default handler;