import { ChangeEvent, FormEvent, Suspense, useRef, useState } from 'react'
import Loader from '@/components/loader'
import Fox from '@/models/fox'
import { Canvas } from '@react-three/fiber'
import useAlert from '@hooks/useAlert'
import Alert from '@/components/alert'

export enum animationType {
  IDLE = 'idle',
  HIT = 'hit',
  WALK = 'walk'
}

const Contacts = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const [isLoading, setLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState(animationType.IDLE)

  const {alert, showAlert, hideAlert} = useAlert()

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleFocus = () => setCurrentAnimation(animationType.WALK)
  const handleBlur = () => setCurrentAnimation(animationType.IDLE)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setCurrentAnimation(animationType.HIT)

    new Promise((resolve) => {
      setTimeout(() => {
        resolve('done')
      }, 2000)
    }).then(() => {
        setLoading(false)
        showAlert({ show: true, text: 'Message sent successfully', type: 'success'})
        setTimeout(() => {
          setCurrentAnimation(animationType.IDLE)
          setForm({name: '', email: '', message: ''})
          hideAlert()
        }, 3000)
      }
    ).catch(() => {
      setLoading(false)
      setForm({name: '', email: '', message: ''})
      setCurrentAnimation(animationType.IDLE)
      showAlert({ show: true, text: 'I didnt receive your message', type: 'danger'})
    })
  }
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className='text-black-500 fnt-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 fnt-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='John@mail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 fnt-semibold'>
            Your Message
            <textarea
              name='message'
              className='textarea'
              placeholder='Let me know how I can help you'
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            { isLoading ? 'Sending...' : 'Send Message' }
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contacts