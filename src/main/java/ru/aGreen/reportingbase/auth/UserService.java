package ru.aGreen.reportingbase.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.aGreen.reportingbase.entity.User;
import ru.aGreen.reportingbase.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService
{
  @Autowired
  private UserRepository userRepository;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
  {
     User userFindByUsername = userRepository.findByUsername(username);

     if(userFindByUsername != null)
     {
        return userFindByUsername;
     }
     //Остальные проверки
     return null;
  }
  public void save(User user) {
      userRepository.save(user);
  }
}