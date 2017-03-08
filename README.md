# Projeto de Engenharia de Software

## Descrição do Sistema:

O Sistema foi desenvolvido utilizando Angularjs, Google maps API, Facebook Api, PHP e mySql. Durante o desenvolvimento, o Front end foi implementado com o servidor nodejs; o Backend num servidor apache. O arquivo de configuração pode ser encontrado em scripts, config.js. 


## Objetivos:

Projetar um sistema de visualização geoespacial. Além das atividades relacionadas à simples visualização dos
dados, feita por usuário anônimos, um sistema completo pode ter operações adicionais, como
alimentação de dados, fazer comentários, registrar-se, gerar alertas para usuários interessados em algum evento,
etc. Importante prever diferentes tipos de usuários – administrador, usuários anônimos, que apenas visualizam
dados básicos, usuários registrados, que têm acesso a uma massa maior de dados, usuários VIPs (pagantes?), que
podem visualizar dados especiais, etc. 


### A especificação do projeto contém, os seguintes entregáveis descriminados a seguir:
1. Elaborar o documento de especificação de requisitos com base no modelo disponibilizado pelo professor (baseado no Documento de Requisitos do RUP).

2. Desenvolver os casos de uso do sistema.
 - Utilizar o guia proposto nos slides da aula de UML para encontrar casos de uso e atores.
 - Cada caso de uso deve vir acompanhado da narrativa, explicitando o fluxo principal e os fluxos alternativos.
 - Considerar uma etapa de refinamento dos casos de uso levantados, onde casos de uso similares são fusionados, comportamentos comuns são reaproveitados (via include, extend, herança, etc) e cenários alternativos são especificados.
 
3. Desenvolva as telas do sistema. O front-end do sistema deve funcionar tanto na plataforma desktop quanto em celulares e tablets (iOS e/ou Android). Sugestão: usar wireframes para acelerar o processo. Há boas ferramentas online de wireframe (como o Axure, MockFlow, Proto.io, etc.), que oferecem período de teste gratuito. Você pode usar o editor online gratuito disponivel em creately.com ou usar um editor gratuito, como o Pencil. Outros editores podem ser encontrados no link fornecido na seção Recursos.

4. Elaborar diagramas de sequência para os casos de uso mais complexos. Aqui as lifelines e as respectivas interações devem ser consistentes com os objetos do padrão arquitetural escolhido (MVC, 4-Layer, Transaction Scripts, Domain Model, etc.). No mínimo, os seguintes cenários devem ser contemplados:
 - inserção de novos dados
 - cadastramento de novo usuário
 
5. Elaborar diagramas de atividade. Lembre-se que este tipo de diagrama é importante para entender os processos de um dado négocio, capturando a interação entre atores envolvidos, o fluxo de informação (que pode ser feito à base de papel, por exemplo). Imagine que uma dada empresa ainda usa papel e você é um ser “invisível”, que apenas observa como os funcionários dessa empresa interagem, geram e modificam documentos, etc, ao longo da execução de um dado processo. Claro que processos envolvendo computador também podem ser modelados. Elabore, no mínimo, os seguintes diagramas de atividades:
 - fluxos da aplicação, em que o usuário se cadastra, se loga no sistema, visualiza mapas e de desloga.
 - mapa de navegação de telas
 
6. Elaborar os diagramas de classe do sistema. Separe as classes em diagramas, de acordo com suas responsabilidades. Por exemplo, você pode organizar os diagramas por camada logica da arquitetura escolhida - e.g. diagrama de classes de dominio, de serviços, etc.

7. Elaborar os diagramas de estado de um objeto suficientemente complexo usado no seu projeto.

8. Explicitar a arquitetura escolhida. Nela você deverá explicitar os módulos do sistema, sempre respeitando o padrão arquitetural escolhido (4-Layer, Transaction Scripts, Domain Model, etc). Use, para tal, diagramas de componentes e/ou de pacotes.

9. Elaborar os diagramas de implantação (deployment), para especificar em que máquinas e recursos os componentes desenvolvidos no item anterior devem ser alocados.

10. Desenvolver, na linguagem de sua preferência, o sistema de acordo com a modelagem acima.
