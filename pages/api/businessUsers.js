// Import necessary modules
const express = require('express');
const router = express.Router();

// Sample data for business users
let businessUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com' }
];

// Define routes for business users
router.get('/', (req, res) => {
    // Logic to fetch and return business users
    res.json(businessUsers);
});

router.post('/', (req, res) => {
    // Logic to create a new business user
    const newUser = req.body;
    businessUsers.push(newUser);
    res.status(201).json(newUser);
});

router.get('/:id', (req, res) => {
    // Logic to fetch a specific business user
    const userId = parseInt(req.params.id);
    const user = businessUsers.find(user => user.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

router.put('/:id', (req, res) => {
    // Logic to update a business user
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
    const index = businessUsers.findIndex(user => user.id === userId);
    if (index !== -1) {
        businessUsers[index] = { ...businessUsers[index], ...updatedUser };
        res.json(businessUsers[index]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

router.delete('/:id', (req, res) => {
    // Logic to delete a business user
    const userId = parseInt(req.params.id);
    const index = businessUsers.findIndex(user => user.id === userId);
    if (index !== -1) {
        const deletedUser = businessUsers.splice(index, 1)[0];
        res.json(deletedUser);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Export the router
module.exports = router;
