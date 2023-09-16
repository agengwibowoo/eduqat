export const getEventDetail = (data, id) => {
    return data.find((event) => event.id === id);
};

export const addSession = (session = [], newSession) => {
    return [...session, newSession];
};

export const getSession = (session = [], id) => {
    return session.find((session) => session.id === id);
};

export const editSession = (session = [], updatedSession) => {
    return session.map((session) =>
        session.id === updatedSession.id
            ? {
                  ...session,
                  ...updatedSession,
              }
            : session
    );
};

export const deleteSession = (session = [], id) => {
    return session.filter((session) => session.id !== id);
};

export const addLesson = (session = [], newLesson) => {
    return session.map((session_) =>
        session_.id === newLesson.session_id
            ? {
                  ...session_,
                  lessons: [
                      ...(session_?.lessons?.length ? session_.lessons : []),
                      newLesson,
                  ],
              }
            : session_
    );
};

export const editLesson = (session = [], updatedLesson) => {
    return session.map((session_) =>
        session_.id === updatedLesson.session_id
            ? {
                  ...session_,
                  lessons: session_.lessons.map((lesson) =>
                      lesson.id === updatedLesson.id
                          ? {
                                ...lesson,
                                ...updatedLesson,
                            }
                          : lesson
                  ),
              }
            : session_
    );
};

export const deleteLesson = (session = [], id) => {
    return session.map((session_) => ({
        ...session_,
        lessons: session_.lessons.filter((lesson) => lesson.id !== id),
    }));
};
