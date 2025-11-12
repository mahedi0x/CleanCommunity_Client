import { useEffect, useState } from "react";

const UpdateIssueModal = ({ isOpen, onClose, issue }) => {
    // State to manage form inputs, initialized with 'issue' data
    const [formData, setFormData] = useState(issue);

    // Update formData whenever the parent component passes a new 'issue'
    useEffect(() => {
        setFormData(issue);
    }, [issue]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleStatusChange = (newStatus) => {
        setFormData({ ...formData, status: newStatus });
    };

    // ... (Submit handler will go here)
    const handleSubmit = () =>{

    }

    if (!isOpen || !formData) return null;

    return (
        <div className="modal-overlay">
            <form onSubmit={handleSubmit}>
                <h3>Update Issue: {formData.title}</h3>
                
                {/* 1. Editable Text/Number Fields */}
                <label>Title:</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                
                {/* 2. Category Dropdown (select from the four given categories) [cite: 73] */}
                <label>Category:</label>
                <select name="category" value={formData.category} onChange={handleChange} required>
                    {/* Categories from the project spec: Garbage, Illegal Construction, Broken Public Property, Road Damage [cite: 39, 40, 41, 42] */}
                    <option value="Garbage">Garbage</option> 
                    <option value="Illegal Construction">Illegal Construction</option>
                    {/* ... other categories */}
                </select>

                {/* 3. Status Radio Buttons/Dropdown (NOT an input field)  */}
                <label>Status:</label>
                <div>
                    <input type="radio" id="ongoing" name="status" value="ongoing" 
                           checked={formData.status === 'ongoing'} onChange={() => handleStatusChange('ongoing')} />
                    <label htmlFor="ongoing">Ongoing</label>
                    
                    <input type="radio" id="ended" name="status" value="ended" 
                           checked={formData.status === 'ended'} onChange={() => handleStatusChange('ended')} />
                    <label htmlFor="ended">Ended</label>
                </div>
                
                {/* ... Add Amount and Description fields similarly */}

                <button type="submit">Save Changes</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default UpdateIssueModal;