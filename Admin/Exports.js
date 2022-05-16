import { Forms } from './Form/List'
import { Fields } from './Field/List'
import { SavedForms } from './SavedForm/List'
import NoteAltIcon from '@mui/icons-material/NoteAlt';

const FormsRoutes = [
    {
        "path": "/forms",
        "component": Forms
    },
    {
        "path": "/fields",
        "component": Fields
    },
    {
        "path": "/savedForms",
        "component": SavedForms
    }
]

const FormsMenu = [
    {
        "title": "Forms",
        "icon": NoteAltIcon,
        "children": [
            {
                "title": "Forms",
                "url": "/forms"
            },
            {
                "title": "Saved Forms",
                "url": "/savedForms"
            }
        ]
    }
]

export { FormsRoutes }
export { Forms }
export { SavedForms }
export { FormsMenu }