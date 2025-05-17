const supabase = require('../lib/supabase');

exports.login = (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        return res.status(200).json({
            token: "mock-token-123",
            user: { email }
        });
    }
    return res.status(400).json({ error: "Email and password required" });
};

exports.me = (req, res) => {
    return res.status(200).json({
        name: 'Soliman Faragy',
    });
};


exports.logout = (_req, res) => {
    return res.status(200).json({ message: "Logged out" });
};