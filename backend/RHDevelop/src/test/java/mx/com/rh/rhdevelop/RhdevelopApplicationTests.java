package mx.com.rh.rhdevelop;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import mx.com.rhdevelop.api.AssistControlController;

@SpringBootTest
class RhdevelopApplicationTests {

	@Autowired
	AssistControlController rhDevelopController;

	@Test
	void contextLoads() {
		assertNotNull(rhDevelopController);
	}

}
