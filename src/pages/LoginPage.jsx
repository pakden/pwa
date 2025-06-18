import { useState } from 'react';
import { supabase } from '../supabaseClient';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert('Login gagal: ' + error.message);
    } else {
      const { user } = data;
      const { data: profile } = await supabase
        .from('users')
        .select('role')
        .eq('id', user.id)
        .single();

      if (profile?.role) {
        localStorage.setItem('role', profile.role);
        if (profile.role === 'TUKANG') {
          window.location.href = '/apply';
        } else if (profile.role === 'PENOLONG_JURUTERA') {
          window.location.href = '/approval';
        } else if (profile.role === 'PENGAWAL') {
          window.location.href = '/inspection';
        } else {
          alert('Peranan tidak dikenali.');
        }
      } else {
        alert('Profil pengguna tidak lengkap.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Log Masuk</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Emel"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br/>
        <input
          type="password"
          placeholder="Kata Laluan"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br/>
        <button type="submit">Log Masuk</button>
      </form>
    </div>
  );
}

export default LoginPage;
