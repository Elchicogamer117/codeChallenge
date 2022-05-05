![Banner code challenge SF](https://user-images.githubusercontent.com/89102805/166856226-1f93ad60-8b00-495a-8f09-71084549e673.png)

## Requerimientos ✔
Se nos proporciono una base de datos en formato json con la que debemos desarrollar los siguientes endpoints:
1. Consultar todos los estudiantes con todos sus campos.
2. Consultar los emails de todos los estudiantes que tengan certificación `haveCertification`.
3. Consultar todos los estudiantes que tengan `credits` mayor a 500.

## Diseño de componentes 📦
<br>

```mermaid
graph TD
    J[(studentList)]
    J-.->A
    A([reader]) & B([partnerService])
    C[[partnerController]]
    A --> C
    B <--> C
    C<-->D[/server\]
    
    style J fill:#000000, stroke: #C000A510, stroke-width:6px
    style A fill:#000000, stroke: #860000, stroke-width:2px
    style B fill:#000000, stroke: #860000, stroke-width:2px
    style C fill:#000000, stroke: #442D62, stroke-width:2px
    style D fill:#000000, stroke: #0080C0, stroke-width:2px
```

<br>

## Diseño de software 💻
En construcción ⚙
