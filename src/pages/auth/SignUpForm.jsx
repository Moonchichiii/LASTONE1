
return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          placeholder="Username"
          required
          autoComplete="username"
        />
        {errors.register?.username &&
          errors.register.username.map((message, index) => (
            <Alert key={`username-error-${index}`} variant="danger">
              {message}
            </Alert>
          ))}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        {errors.register?.email &&
          errors.register.email.map((message, index) => (
            <Alert key={`email-error-${index}`} variant="danger">
              {message}
            </Alert>
          ))}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
          autoComplete="new-password"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm Password"
          required
          autoComplete="new-password"
        />

        {errors.confirmPassword &&
          errors.confirmPassword.map((message, index) => (
            <Alert key={`confirmPassword-error-${index}`} variant="danger">
              {message}
            </Alert>
          ))}
      </div>

   
      <Button variant="primary" type="submit">
        Register
      </Button>
    </form>
  );
};

export default RegistrationForm;
