function ProjetCard(props) {
    return (
        <div className="projet-card">
            <h3>{props.titre}</h3>
            <p>{props.description}</p>
            <p className="techs">Technologies : {props.technologies}</p>
            <a href={props.lien} target="_blank">Voir le projet</a>
        </div>
    );
}

function BadgeCompetence({nom, niveau}) {
    return(
        <span style={{
            display: "inline-block",
            margin: "5px",
            padding: "5px 12px",
            backgroundColor: "#f070d0",
            color: "white",
            borderRadius: "20px",
            fontSize: "13px",
        }}>
            {nom} : {niveau}
        </span>
    );
}

function LienSocial({plateforme, url}) {
    return(
        <a href={url} target="_blank" rel="noopener noreferrer" style={{margin: "0 10px", color: "#f070d0", textDecoration: "none"}}>
            {plateforme}
        </a>
    );
}

function ListeProjets() {
    return(
        <div>

            <ProjetCard titre="Site Portfolio Photographe" 
               description="Site responsive pour une photographe. Galerie avec filtre par catégorie et formulaire de contact." 
               technologies="HTML, CSS, jQuery" 
               lien="https://github.com/mariam-kouhlani/portfolio-photographe"
            />
            <ProjetCard titre="Application de Gestion de Tâches" 
              description="Application web pour gérer des tâches avec ajout, suppression et filtrage par statut." 
              technologies="React, JavaScript, CSS" 
              lien="https://github.com/mariam-kouhlani/task-manager"
            />
            <ProjetCard titre="Gestion Base de Données  Étudiants" 
              description="Programme en Python pour gérer les étudiants avec ajout, modification et suppression." 
              technologies="Python, SQLite, SQL" 
              lien="https://github.com/mariam-kouhlani/etudiants-db"
            />

        </div>
    );
}

const racine = ReactDOM.createRoot(document.getElementById('zone-projets'));
racine.render(<ListeProjets/>);

const racine2 = ReactDOM.createRoot(document.getElementById('zone-badges'));
racine2.render(
    <div>
        <BadgeCompetence nom="React" niveau="Intermédiaire"/>
        <BadgeCompetence nom="jQuery" niveau="Avancé"/>
        <BadgeCompetence nom="Python" niveau="Avancé"/>
    </div>
);