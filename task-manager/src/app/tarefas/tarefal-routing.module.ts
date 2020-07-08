import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { Routes } from '@angular/router';

export const TarefaRoutes: Routes =[
    //atalho para o listar tarefa
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    }
];