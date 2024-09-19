import React, { useState } from 'react';
import UploadForm from './UploadForm';
import TeethViewer from './TeethViewer';
import SegmentationResults from './SegmentationResults';
import { Container } from '@mui/material';

function UploadViewComponent() {
    const [model, setModel] = useState(null);  // Pour gérer le modèle 3D
    
    // Fonction appelée lorsque le modèle est chargé
    const handleModelLoaded = (loadedModel) => {
        setModel(loadedModel);
    };

    return (
        <div>
            {/* Contenu principal */}
            <Container>
                <h1>3D Teeth Segmentation</h1>

                {/* Formulaire de téléchargement avec gestion du modèle */}
                <div style={{ marginBottom: '32px' }}>
                    <UploadForm onModelLoaded={handleModelLoaded} />
                </div>

                {/* Affichage du modèle 3D */}

                <div style={{ marginBottom: '32px' }}>
                    {model && <h2>Model loaded: {model.name}</h2>}
                    <TeethViewer model={model} />
                </div>

                {/* Résultats de la segmentation */}
                <div style={{ marginBottom: '32px' }}>

                <SegmentationResults />
                </div>
            </Container>
        </div>
    );
}

export default UploadViewComponent;
