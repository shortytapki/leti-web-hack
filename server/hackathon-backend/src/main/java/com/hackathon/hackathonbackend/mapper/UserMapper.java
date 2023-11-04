package com.hackathon.hackathonbackend.mapper;

import com.hackathon.hackathonbackend.entity.UserData;
import com.hackathon.hackathonbackend.entity.dto.UserDTO;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class UserMapper extends ModelMapper {

    public UserDTO mapFromUserData(UserData userData) {
        return map(userData, UserDTO.class);
    }
}
