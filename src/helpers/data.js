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
