
"use client"
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
  Link
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../../lib/api";
import Image from "next/image";


const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function EmailSection() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >

      <div className="z-10">
        <h5 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a8dadc] via-[#457b9d] to-[#1d3557] mb-4">
          Let`s Connect
        </h5>
        <p className="text-black mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities. You can contact me for further information. I&apos;ll get back to you asap.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/MVCorreas">
            <Image src='/github-icon.svg' alt="Github Icon" width={60} height={60}/>
          </Link>
          <Link href="https://www.linkedin.com/in/mar%C3%ADa-victoria-correas-148049b2/">
            <Image src='/linkedin-icon.svg' alt="Linkedin Icon"  width={60} height={60}/>
          </Link>
        </div>
      </div>

      <div >
      <Container maxW="550px" mt={8} >
      {/* <Heading>Contact</Heading> */}
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}

      <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.300"
          style={{backgroundColor: 'RGBA(0, 0, 0, 0.92)', color: '#FFFFFF'}}
          placeholder="Your name"          
           value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          errorBorderColor="red.300"
          placeholder="Your email"
          style={{backgroundColor: 'RGBA(0, 0, 0, 0.92)', color: '#FFFFFF'}}
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        mb={5}
        isRequired
        isInvalid={touched.subject && !values.subject}
      >
        <FormLabel>Subject</FormLabel>
        <Input
          type="text"
          name="subject"
          placeholder="What do you want to talk about?"
          errorBorderColor="red.300"
          style={{backgroundColor: 'RGBA(0, 0, 0, 0.92)', color: '#FFFFFF'}}
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.message && !values.message}
        mb={5}
      >
        <FormLabel>Message</FormLabel>
        <Textarea
          type="text"
          name="message"
          placeholder="Message"
          rows={4}
          errorBorderColor="red.300"
          style={{backgroundColor: 'RGBA(0, 0, 0, 0.92)', color: '#FFFFFF'}}
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <Button colorScheme='teal' variant='solid' style={{borderRadius: '40px', padding: '20px'}}
        isLoading={isLoading}
        disabled={
          !values.name || !values.email || !values.subject || !values.message
        }
        onClick={onSubmit}
  
     
        > Submit
   
      </Button>
       
    </Container>

      </div>
    </section>
  );
}