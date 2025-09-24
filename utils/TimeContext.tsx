import * as React from "react";
import { createContext, ReactNode, useContext, useState } from "react";

type Break = {
  start: Date | null;
  end: Date | null;
  duration: number;
};

type Session = {
  id: string | null;
  status: "in" | "out" | "break";
  timeIn: Date | null;
  timeOut: Date | null;
  breakStart: Date | null;
  breaks: Break[];
  totalBreakTime: number;
  totalHours?: number;
  date?: string;
};

type TimeContextType = {
  sessions: Session[];
  currentSession: Session;
  clockIn: () => void;
  clockOut: () => void;
  startBreak: () => void;
  endBreak: () => void;
  getTodayWorkSummary: () => { hours: number; minutes: number };
};

const TimeContext = createContext<TimeContextType | undefined>(undefined);

//Custom Hook
export const useTime = () => {
  const context = useContext(TimeContext);
  if (!context) {
    throw new Error("useTime must be used within a TimeProvider");
  }
  return context;
};

type TimeProviderProps = {
  children: ReactNode;
};

export const TimeProvider: React.FC<TimeProviderProps> = ({ children }) => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [currentSession, setCurrentSession] = useState<Session>({
    id: null,
    status: "out",
    timeIn: null,
    timeOut: null,
    breakStart: null,
    breaks: [],
    totalBreakTime: 0,
  });

  const clockIn = () => {
    const now = new Date();
    const sessionId = `session_${Date.now}`;
    setCurrentSession({
      id: sessionId,
      status: "in",
      timeIn: now,
      timeOut: null,
      breakStart: null,
      breaks: [],
      totalBreakTime: 0,
    });
  };

  const clockOut = () => {
    const now = new Date();
    if (currentSession.timeIn) {
      const completedSession: Session = {
        //Spreading data basically copies the previous data from the "Clock in"
        ...currentSession,
        status: "out",
        timeOut: now,
        totalHours:
          (now.getTime() -
            currentSession.timeIn.getTime() -
            currentSession.totalBreakTime) /
          (1000 * 60 * 60),
        date: new Date().toDateString(),
      };

      setSessions((prev) => [completedSession, ...prev]);
      setCurrentSession({
        id: null,
        status: "out",
        timeIn: null,
        timeOut: now,
        breakStart: null,
        breaks: [],
        totalBreakTime: 0,
      });
    }
  };

  const startBreak = () => {
    const now = new Date();
    setCurrentSession((prev) => ({
      ...prev,
      status: "break",
      breakStart: now,
    }));
  };

  const endBreak = () => {
    const now = new Date();
    setCurrentSession((prev) => {
      const breakDuration = prev.breakStart
        ? now.getTime() - prev.breakStart.getTime()
        : 0;

      return {
        ...prev,
        status: "in",
        breakStart: null,
        breaks: [
          ...prev.breaks,
          { start: prev.breakStart, end: now, duration: breakDuration },
        ],
        totalBreakTime: prev.totalBreakTime + breakDuration,
      };
    });
  };

  const getTodayWorkSummary = (): { hours: number; minutes: number } => {
    const today = new Date().toDateString();

    const todaySessions = sessions.filter((s) => s.date === today);

    const totalMs: number = todaySessions.reduce(
      (sum: number, session: Session) => {
        const workMs =
          (session.timeIn && session.timeOut
            ? session.timeOut.getTime() - session.timeIn.getTime()
            : 0) - session.totalBreakTime;
        return sum + workMs;
      },
      0
    );

    const hours = Math.floor(totalMs / (1000 * 60 * 60));
    const minutes = Math.floor((totalMs % (1000 * 60 * 60)) / (1000 * 60));

    return { hours, minutes };
  };

  const value: TimeContextType = {
    sessions,
    currentSession,
    clockIn,
    clockOut,
    startBreak,
    endBreak,
    getTodayWorkSummary,
  };

  return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>;
};
