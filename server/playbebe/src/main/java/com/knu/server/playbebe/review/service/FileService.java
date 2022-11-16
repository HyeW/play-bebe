package com.knu.server.playbebe.review.service;

import com.knu.server.playbebe.review.model.Image;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class FileService {

    @Value("${file.path}")
    private String filePath;

    //Ȯ���� ����
    public String extractExt(String originalFilename){
        int idx = originalFilename.lastIndexOf(".");
        String ext = originalFilename.substring(idx);
        System.out.println("Ext: "+ext);

        return ext;
    }

    //������ ���� �̸� ����
    public String createStoreFilename(String originalFilename){
        String uuid = UUID.randomUUID().toString();
        String ext = extractExt(originalFilename);
        String storeFilename = filePath+uuid + ext;

        return storeFilename;
    }

    //���� ���� ����
    public Image storeFile(MultipartFile multipartFile) throws IOException {

        String storePath = createStoreFilename(multipartFile.getOriginalFilename());

        multipartFile.transferTo(new File(storePath));

        return Image.builder()
                .storePath(storePath)
                .originalFilename(multipartFile.getOriginalFilename())
                .build();
    }

    //���� ��� ����
    public FileSystemResource findFile(String path) throws FileNotFoundException {
        FileSystemResource resource = new FileSystemResource(path);
        if(!resource.exists()){
            throw new FileNotFoundException();
        }
        return resource;
    }
}
