initializr sirve para configurar rapidamente una aplicacio, en el seleccionamos el proyuecto, lenguaje, version de java.
dependencias, empaquetado, entre otros. Una vez configurado, genera un proyecto base que podemos descargar
y abrir en nuestro entorno de desarrollo para comenzar a trabajar de inmediato.

Un controlador se define con una anotación @RestController en Spring Boot.
Esta anotación indica que la clase es un controlador

y las rutas se definen con la anotación @RequestMapping
o sus variantes como @GetMapping, @PostMapping, etc.

Idempotencia id unico para evitar operaciones
duplicadas en peticiones HTTP.

# Inyeccion de dependencias

    anotación `@Autowired`
    Es un patron de diseño que recibe dependencias externas, es una forma parte de la inversion de control

# Seguridad en APIS

    Utilizo Spring boot security
    Para proteger las rutas privadas se usa securityfilter patron builder
    Vault para gestionar las credenciales de forma segura
    JWT autenticacioin y autotizacion

# ¿Cómo crearías un API REST con Spring Boot?

    “Para crear una API REST con Spring Boot empiezo usando Spring Initializr, donde configuro:
    •	el gestor de construcción (Maven, normalmente),
    •	el paquete como JAR,
    •	la versión de Java,
    •	y dependencias como Spring Web o Spring Data JPA si serán necesarias.

    Después descargo el proyecto, lo importo en mi IDE (yo uso VS Code) y estructuro las tres capas principales:
      •	@RestController → define los endpoints
      •	@Service → aquí va la lógica de negocio
      •	@Repository → manejo de datos con JPA

    En el controlador uso anotaciones como
    @RequestMapping, @GetMapping, @PostMapping, etc., para definir las rutas principales.

    Finalmente configuro el application.yml con los parámetros necesarios (puertos, base de datos, etc.) y ya tengo la API lista para comenzar a trabajar.”

# ¿Cómo manejarías la configuración de la base de datos y las variables de entorno en Spring Boot?

    “En Spring Boot manejo la configuración de la base de datos a través del archivo
    application.yml (o application.properties).

    Ahí defino:
      •	la URL de conexión
      •	el usuario
      •	la contraseña
      •	el driver
      •	el dialecto
      •	y el puerto de la aplicación

    Spring Boot, junto con Spring Data JPA, se encarga de manejar gran parte de la conexión y el mapeo de entidades.

    Para variables sensibles o de ambiente, puedo apoyarme en variables de entorno del sistema o en un archivo .env si estoy trabajando en local, pero nunca las dejo hardcodeadas en el código.

    Con esa configuración básica, la aplicación queda lista para conectarse a la base de datos y operar normalmente.”

# ¿Cómo separas la lógica de negocio en una API? ¿Por qué es importante tener un Service separado del Controller?

    “La lógica de negocio la separo en una clase anotada con @Service, que forma parte de la capa de servicio.

    El @RestController solamente se encarga de recibir la petición, validar los datos y delegar el trabajo al Service.
    El Service contiene la lógica de negocio, reglas, validaciones internas y llamadas a la capa de datos.

    Separarlos es importante porque:
      •	el Controller queda limpio y fácil de mantener
      •	el Service permite reutilizar lógica
      •	facilita las pruebas unitarias
      •	mejora la organización del código
      •	evita mezclar lógica con manejo de rutas

    El Controller solo coordina;
    el Service resuelve el problema.”

# ¿Qué es una clase Controller?

    clase que maneja las solicitudes HTTP entrantes en una aplicación web.

# Que es un Bean y cuales son su scope

    scopes = singleton y prototype
    Bean es un objetoo gestionado por el coontenedoor de spring y es escensial para el cicloo de vida del framework
    nos permite hacer una inyeccion de dependencias
    ejemplo
    @component, @service, @repository, @controoller, @configuration

# ¿Qué anotaciones usas en cada capa?

    En el Controller uso @RestController para los endpoints;
    en el Service uso @Service para la lógica de negocio;
    en el Repository uso @Repository con JPA;
    y en las entidades uso @Entity con sus anotaciones de mapeo.

# ¿Cómo configuras la conexión a la base de datos?

    Configuro la base de datos usando el archivo application.yml donde declaro los parámetros de conexión:
    spring.datasource.url, username, password, driver-class-name, y en caso de usar JPA,
    también spring.jpa.hibernate.ddl-auto y el dialecto de Hibernate.

    Para seguridad, las credenciales no las dejo en el archivo sino como variables de entorno,
    que Spring Boot puede leer automáticamente.

    Con esto, Spring Boot crea el DataSource y Spring Data JPA maneja las entidades y el acceso a datos.

# Explica la inyección de dependencias en Spring Boot.

    Es el mecanismo con el que Spring crea e inyecta automáticamente los objetos que una clase necesita, usando anotaciones como @Service, @Repository y @Autowired.
    Ayuda a mantener las clases desacopladas y el código más limpio.

# ¿Qué patrón usarías para separar lógica de negocio?

    Utilizo el patrón en capas:
    – La capa Controller expone los endpoints.
    – La capa Service contiene la lógica de negocio y reglas del dominio.
    – La capa Repository accede a la base de datos.

    Esto separa responsabilidades, facilita pruebas unitarias y evita que
    el controlador tenga lógica que no le corresponde

# ¿Cómo manejarías errores y códigos HTTP?

    Manejo los errores con un Global Exception Handler usando @ControllerAdvice, donde capturo excepciones y retorno respuestas con códigos HTTP claros.
    Así garantizo que la API siempre devuelva un formato uniforme para los errores.

# ¿Cómo manejarías secretos o credenciales?

    Uso variables de entorno, un gestor de secretos como Google Secret Manager o Vault,
    y nunca subo credenciales al código. Toda clave sensible vive fuera del repositorio.

#

## GCP / Cloud Run

# ¿qué servicio de Google Cloud utilizarías para desplegar un backend en Spring Boot y por qué?

    Usaría Cloud Run porque permite desplegar un backend en contenedores con autoscaling y sin administrar servidores.
    Solo subo la imagen Docker y la plataforma se encarga del resto

# ¿puedes explicarme qué es un sistema event-driven y en qué casos usarías Pub/Sub?”

    “Un sistema event-driven es una arquitectura donde los microservicios se comunican a través de eventos, no mediante llamadas directas.
    Esto permite que los servicios estén desacoplados, es decir, que no dependan unos de otros para funcionar.

    En Google Cloud usaría Pub/Sub, que funciona con el modelo:
      •	Publisher → publica un evento en un topic
      •	Topic → el canal donde viaja el evento
      •	Subscriber → escucha ese topic y ejecuta una acción cuando llega el mensaje

    Lo usaría cuando necesito que un servicio le notifique a otro que algo ocurrió, por ejemplo:
      •	cuando se crea una reserva, enviar un evento para facturación
      •	cuando un usuario compra un ticket, notificar al sistema de puntos
      •	cuando llega un archivo, activar un procesamiento automático

    La ventaja es que los microservicios no tienen que estar conectados entre sí ni hacer llamadas bloqueantes; todo sucede de forma asíncrona y escalable.”

# ¿cuál es la diferencia entre SQL y NoSQL?

    “La diferencia principal entre SQL y NoSQL es la forma en que almacenan y organizan los datos:

    SQL (relacional)
      •	Datos estructurados en tablas, columnas y relaciones.
      •	Reglas claras y consistencia fuerte (ACID).
      •	Ideal cuando la información tiene relaciones entre sí.
      •	Ejemplos: PostgreSQL, MySQL, SQL Server.

    NoSQL (no relacional)
      •	Los datos no siguen un esquema fijo.
      •	Se almacenan en documentos, como JSON, o en colecciones.
      •	Más flexible para cambios de estructura.
      •	Ideal para grandes volúmenes de datos o escrituras rápidas.
      •	Ejemplos: MongoDB, Firestore, DynamoDB.

# ¿Y en qué caso usarías cada uno?”

    Usaría SQL cuando:
      •	hay relaciones claras entre entidades (usuarios, reservas, vuelos, tickets).
      •	necesito consistencia fuerte.
      •	las consultas son complejas y requieren joins.

    Usaría NoSQL cuando:
      •	necesito escrituras rápidas y a gran escala.
      •	los datos cambian mucho o no tienen un esquema fijo.
      •	quiero almacenar documentos JSON sin relaciones.

# ¿cómo manejas la observabilidad en un servicio?

    La observabilidad consiste en poder entender qué está pasando dentro de un servicio.
    por medio de logs metricas y trazas.
    Normalmente se usan herramientas como Grafana, Prometheus, Stackdriver (Google Cloud Logging/Monitoring) para visualizar logs, métricas y trazas.
    Con esto puedo detectar problemas rápidamente y asegurar la salud del servicio.

# ¿Qué son logs, métricas y trazas?”

      1. Logs

    Son registros de eventos, por ejemplo:
      •	peticiones recibidas
      •	errores
      •	información del flujo interno

    Sirven para diagnosticar problemas y auditar lo que ocurre.

    2. Métricas

    Son valores numéricos que representan el estado del sistema, como:
      •	uso de CPU y memoria
      •	cantidad de peticiones
      •	tiempos de respuesta
      •	cantidad de errores

    Se usan para monitorear el rendimiento y detectar anomalías.

    3. Trazas (Traces)

    Permiten ver el recorrido completo de una petición entre microservicios.
    Ayudan a identificar en qué parte se genera una demora o un fallo.

# ¿Cómo resuelves un incidente de backend?

    Sigo un proceso: reproduzco el error, reviso logs y métricas, identifico la causa raíz,
    aplico el fix en un ambiente controlado, despliego, monitoreo y documento el incidente para que no vuelva a ocurrir.

# ¿Cómo asegurarías la calidad de un servicio?

    Mantengo arquitectura limpia, aplico pruebas, uso logs/métricas/trazas para monitoreo,
    valido entradas, manejo bien los códigos HTTP y documento y versiono las APIs.
    Con eso aseguro calidad y mantenibilidad.

# ¿Cómo documentas tus APIs?

    Documentación con OpenAPI/Swagger.
    Anoto mis endpoints, genero la documentación automática y mantengo el versionado /v1.
    Así cualquier equipo entiende el contrato y puede consumir la API fácilmente.

#

# Posibles preguntas

    •	¿Qué es un DTO y para qué sirve?
    •	¿Cómo versionarías una API?
    •	¿Cómo manejarías errores y códigos HTTP?
    •	¿Qué es un endpoint idempotente?

• ¿Cómo te organizas cuando tienes muchas tareas?
• Cuéntame un problema técnico que tuviste y cómo lo resolviste.
• ¿Qué haces cuando no sabes algo?

• Variables de entorno
• .yml
• No subir claves al repo
• Uso de Postman o OpenAPI
