# comp-usuarios
-- nao é o usuarios do firebase (é uma coleçao nossa)
-- responsabilidade: listar, cadastrar, editar e remover usuario
-- nao precisa integrar com a autenticacao do firebase (ainda)

# usar login, pode

# personas: 
- maria gerente (botao excluir usuario - nao precisa implementar)
- ana recepcao (botao excluir usuario nao vai aparecer)

# cenario
```
 tarefas = [
   {id: 1, descricao: 'maria', roles: ['gerente', 'exclui-usuario', 'exclui-acomodacao']]},
   {id: 2, descricao: 'ana', roles: ['recepcao']}
 ]
```
# tela1 - listagem
  rota: /usuarios
  listar usuarios
  aparecer uma opçao no menu
  
# tela2 - editar 
  rota: /usuarios/:usuarioId
  exibir um usuario
   
  
