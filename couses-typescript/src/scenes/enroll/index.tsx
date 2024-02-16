import { ClassType, ScheduledClass, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { getClassesData } from '@/shared/classes'
import HText from '@/shared/HText'
import { useTranslation } from 'react-i18next'
import React, { useState, useEffect } from 'react'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

function Enroll({ setSelectedPage }: Props) {
  const { t } = useTranslation()

  // TODO this list needs to be shared with the one in ourclasses/index.tsx
  const classes = getClassesData()
  const [selectedClass, setSelectedClass] = useState<ClassType | null>(null)
  const [selectedScheduledClass, setSelectedScheduledClass] =
    useState<ScheduledClass | null>(null)
  const [selectedScheduledClassId, setSelectedScheduledClassId] = useState<
    string | null
  >(null)

  useEffect(() => {
    const defaultClassParam = new URLSearchParams(window.location.search).get(
      'defaultClass',
    )
    const defaultClassName = defaultClassParam
      ? decodeURIComponent(defaultClassParam)
      : classes[0]?.name

    if (defaultClassName) {
      handleClassChange({
        target: { value: defaultClassName },
      } as React.ChangeEvent<HTMLSelectElement>)
    }
  }, []) // Empty dependency array ensures it runs only once when the component mounts

  const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedClassName = event.target.value
    const selectedClassObject = classes.find(
      (classItem) => classItem.name === selectedClassName,
    )
    setSelectedClass(selectedClassObject || null)

    // Reset the selected scheduled class when changing the class dropdown
    setSelectedScheduledClass(null)

    // Reset the value of the scheduled class dropdown to the default option
    const scheduledClassDropdown = document.getElementById(
      'scheduledClassDropdown',
    ) as HTMLSelectElement | null

    if (scheduledClassDropdown) {
      scheduledClassDropdown.value = '0'
    }
  }

  const handleScheduledClassChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedScheduledClassId = event.target.value

    if (!selectedScheduledClassId) {
      // Clear the state when the default option is selected
      setSelectedScheduledClass(null)
    } else {
      const selectedScheduledClassObject = JSON.parse(selectedScheduledClassId)
      setSelectedScheduledClass(selectedScheduledClassObject || null)
    }

    // Update the selected scheduled class id in state
    setSelectedScheduledClassId(selectedScheduledClassId)
  }

  const handleEntryClick = (clickedScheduledClass: ScheduledClass) => {
    setSelectedScheduledClass(clickedScheduledClass)
  }

  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger()

    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <section id="enroll" className="mx-auto w-5/6 pt-24 pb-32 ">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Enroll)}>
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">{t(`joinNow`)}</span>
          </HText>
          <p className="my-5">{t(`contactus.paragraph`)}</p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-full md:basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/f7ba2dd2e7e32df7342994e794927974"
              method="POST"
            >
              {errors.selectedClass && (
                <p className="text-primary-500">{t(`error.requiredField`)}</p>
              )}
              <select
                className={inputStyles}
                {...register('selectedClass', { required: true })}
                onChange={handleClassChange}
                defaultValue={classes[0]?.name}
              >
                {classes.map((classItem, index) => (
                  <option key={index} value={classItem.name}>
                    {classItem.name}
                  </option>
                ))}
              </select>

              {selectedScheduledClass &&
                selectedScheduledClass.remainingSeats === 0 && (
                  <p className="text-primary-500">
                    {t('error.noSeatsAvailable')}
                  </p>
                )}
              {selectedClass && selectedClass.scheduledClasses && (
                <select
                  id="scheduledClassDropdown"
                  className={inputStyles}
                  {...register('selectedScheduledClass')}
                  onChange={handleScheduledClassChange}
                  value={JSON.stringify(selectedScheduledClass) || ''}
                >
                  <option value={''}>
                    {t('enroll.defaultClassSelectionMessage')}
                  </option>
                  {selectedClass.scheduledClasses.map(
                    (scheduledClass, index) => (
                      <option
                        key={index}
                        value={JSON.stringify({
                          id: scheduledClass.id,
                          startDate: scheduledClass.startDate,
                          startTime: scheduledClass.startTime,
                          endTime: scheduledClass.endTime,
                          frequency: scheduledClass.frequency,
                          dayOfWeek: scheduledClass.dayOfWeek,
                          remainingSeats: scheduledClass.remainingSeats,
                        })}
                      >
                        {scheduledClass.startDate} {scheduledClass.startTime}-
                        {scheduledClass.endTime}
                      </option>
                    ),
                  )}
                </select>
              )}

              {errors.name && (
                <p className="text-primary-500">
                  {errors.name.type === 'required' && t(`error.requiredField`)}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder={t(`name`)}
                {...register('name', {
                  required: true,
                  maxLength: 100,
                })}
              />

              {errors.phoneNumber && (
                <p className="text-primary-500">
                  {errors.phoneNumber.type === 'required' &&
                    t(`error.requiredField`)}
                  {errors.phoneNumber.type === 'maxLength' &&
                    t(`error.max100Chars`)}
                  {errors.phoneNumber.type === 'pattern' &&
                    t(`error.invalidPhoneNumber`)}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder={t(`phoneNumber`)}
                {...register('phoneNumber', {
                  required: true,
                  maxLength: 100,
                  pattern: /^(\+?\d{1,13}|\d{1,13})$/, // Adjust the pattern according to your needs
                })}
              />

              {errors.email && (
                <p className="text-primary-500">
                  {errors.email.type === 'required' && t(`error.requiredField`)}
                  {errors.email.type === 'pattern' && t(`error.invalidEmail`)}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register('email', {
                  required: false, // Make it optional
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              <textarea
                className={inputStyles}
                rows={10}
                cols={50}
                placeholder={t(`message`)}
                {...register('message', {
                  maxLength: 2000,
                })}
              />

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                {t(`submit`)}
              </button>
            </form>
          </motion.div>

          {/* Display selected class information with motion animation */}
          <motion.div
            className="relative mt-16 basis-full md:basis-3/5 md:mt-0"
            key={selectedClass?.name || 'empty'}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            {selectedClass && (
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {selectedClass.name}
                </h2>
                <p className="mb-4">{selectedClass.description}</p>

                {selectedClass.price && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">
                      {t(`price`)}:
                    </h3>
                    <p className="text-2xl text-green-500">
                      {selectedClass.price}
                    </p>
                  </div>
                )}

                {selectedClass.ageInterval && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">{t(`age`)}:</h3>
                    <p className="text-2xl text-green-500">
                      {selectedClass.ageInterval}
                    </p>
                  </div>
                )}

                {selectedClass.scheduledClasses &&
                  selectedClass.scheduledClasses.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold mb-3">
                        {t(`enroll.scheduledClasses`)}:
                      </h3>
                      <div className="flex flex-wrap -mx-3">
                        {selectedClass.scheduledClasses.map(
                          (scheduledClass, index) => (
                            <div
                              key={index}
                              className={`mb-4 pl-4 w-full sm:w-1/3 lg:w-1/3 ${
                                scheduledClass.id === selectedScheduledClass?.id
                                  ? 'border-l-4 border-green-500 bg-green-100'
                                  : 'border-l-4 border-primary-500'
                              }`}
                              onClick={() => handleEntryClick(scheduledClass)}
                            >
                              <strong>
                                {t(`enroll.class.remainingSeats`)}: &nbsp;
                                <span
                                  className={`text-${
                                    scheduledClass.remainingSeats === 0
                                      ? 'primary-500'
                                      : 'green-500'
                                  }`}
                                >
                                  {scheduledClass.remainingSeats}
                                </span>
                              </strong>
                              <br />
                              <strong>{scheduledClass.frequency}</strong>,{' '}
                              {t(`enroll.class.each`)}{' '}
                              <strong>{scheduledClass.dayOfWeek} </strong>{' '}
                              <br />
                              {t(`enroll.class.between`)}{' '}
                              <strong>
                                {scheduledClass.startTime} -{' '}
                                {scheduledClass.endTime}
                              </strong>
                              <br />
                              {t(`enroll.class.startDate`)}{' '}
                              <strong>{scheduledClass.startDate} </strong>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                <div className="mt-4">
                  <img
                    className="w-full md:max-w-md mx-auto"
                    alt="contact-us-page-graphic"
                    src={selectedClass.image}
                  />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Enroll
